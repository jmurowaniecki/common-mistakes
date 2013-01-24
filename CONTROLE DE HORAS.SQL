-- POR DIA --
select user_id, DATA, SEC_TO_TIME(SUM(time_to_sec(`out`)) -SUM(time_to_sec(`in`))) AS horas from horarios GROUP BY DATA

-- POR SEMANA --
SELECT user_id, DATA, SEC_TO_TIME(SUM(time_to_sec(`out`)) -SUM(time_to_sec(`in`))) AS horas FROM horarios GROUP BY WEEK(DATA)