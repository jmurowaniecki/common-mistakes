/* Função JS para validação de CPFs - eu sei que já existem muitos por aí, mas eu gosto de refazer a roda..
 
- John Murowaniecki
http://twitter.com/jmurowaniecki
*/
function validarCPF(cpf)
{
   if(cpf.length != 11 || cpf.replace(eval('/'+cpf.charAt(1)+'/g'),'') == '')
   {
      return false;
   }
   else
   {
      for(n=9; n<11; n++)
      {
         for(d=0, c=0; c<n; c++) d += cpf.charAt(c) * ((n + 1) - c);
         d = ((10 * d) % 11) % 10;
         if(cpf.charAt(c) != d) return false;
      }
      return true;
   }
}
