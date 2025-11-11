using System;

namespace Utilitarios
{
    public class Calculadora
    {
        // Função para calcular o fatorial de um número
        public static long CalcularFatorial(int numero)
        {
            if (numero < 0)
            {
                throw new ArgumentException("O número não pode ser negativo.");
            }

            long resultado = 1;

            for (int i = 1; i <= numero; i++)
            {
                resultado *= i;
            }

            return resultado;
        }

        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("Digite um número para calcular o fatorial:");
                int numero = int.Parse(Console.ReadLine());
                long fatorial = CalcularFatorial(numero);
                Console.WriteLine($"O fatorial de {numero} é {fatorial}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro: {ex.Message}");
            }
        }
    }
}
