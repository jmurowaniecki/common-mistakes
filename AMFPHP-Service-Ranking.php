<?php
class Ranking
{
	var $db_conn = FALSE;
	var $db_host = '<database host - usually `localhost`>';
	var $db_user = '<database username>';
	var $db_pass = '<database password>';
	var $db_base = '<database name>';
	var $db_data = FALSE;
	var $db_salt = '<put here some string>';
	var $secrets = '<put here another string>';

	public function __construct()
	{
		return $this->db_connect();
	}

	public function __destruct()
	{
		return $this->db_flush();
	}

	private function db_flush()
	{
		if ($this->db_conn)
		{
			mysql_close($this->db_conn);
		}
		return $this->db_conn = FALSE;
	}

	private function db_connect()
	{
		return $this->db_conn = mysql_connect($this->db_host, $this->db_user, $this->db_pass) or mysql_error();
	}

	private function db_query($sql = FALSE)
	{
		if ( ! $this->db_conn)
		{
			$this->db_connect();
		}
		mysql_select_db($this->db_base);
		$this->db_data = mysql_query($sql);
		return @mysql_num_rows($this->db_data) > 0 ? $this->db_fetch($this->db_data) : FALSE;
	}

	private function db_fetch($result = FALSE)
	{
		$results = array();
		#
		if ($result)
		while ($reg = mysql_fetch_assoc($result))
		{
			$results[] = $reg;
		}
		#
		return $results;
	}

	private function query($sql)
	{
		return $this->db_query($sql);
	}

	private function escapeMe($string = FALSE)
	{
		return str_replace(array('`', '\'', '\\', '"', '#', '$', '%', '&'), array(''), $string);
	}

	public function showScore($game_id = FALSE, $quantity = 5)
	{
		return (is_numeric($game_id) && is_numeric($quantity))
		? $this->query("SELECT *
			FROM `ranking`
			WHERE `game_id` = '$game_id'
			ORDER BY `points` DESC
			LIMIT $quantity")
		: array('error' => 2, 'message' => 'Invalid game id or quantity of entries.');
	}

	public function saveScore($game_id = FALSE, $email = FALSE, $name = NULL, $site = NULL, $points = FALSE, $check = FALSE)
	{
		if (is_numeric($game_id) && $name && is_numeric($points))
		{
			if ($check && $check != md5($game_id.$email.$name.$site.$points.$this->db_salt))
			{
				return 'Sory dude. Your code is invalid!';
			}
			foreach (array('email', 'name', 'site') as $f)
			{
				$$f = $this->escapeMe($$f);
			}
			$this->query("INSERT INTO ranking (created, game_id, email, name, site, points, `check`)
			VALUES (NOW(), '$game_id', '$email', '$name', '$site', '$points', '$check')");
			return array('error' => 0, 'message' => 'Score saved!');
		}
		else
		{
			return array('error' => 1, 'message' => 'Invalid game id, name or score.');
		}
	}

	public function resetScore($game_id = FALSE, $password = FALSE)
	{
		return ($password != $this->secrets && is_numeric($game_id))
		? array('error' => 3, 'message' => 'Invalid password or game id.')
		: $this->query("DELETE FROM ranking WHERE game_id = '$game_id'")
		? array('error' => 0, 'message' => 'Scores for game id deleted.')
		: array('error' => 4, 'message' => 'Unable to delete \'cos: ' . mysql_error());
	}

	/*
	public function truncateScore($password = FALSE)
	{
		return ($password != $this->secrets)
		? array('error' => 3, 'message' => 'Invalid password')
		: $this->query("TRUNCATE TABLE ranking");
	}*/
}
?>