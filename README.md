# desenvolvimento-web-aula
Desenvolvimento para testes na aula de desenvolvimento web
# Calculadora de Fatorial em C#

Este repositório contém uma implementação simples em C# para calcular o fatorial de um número. A função `CalcularFatorial` recebe um número inteiro e retorna o fatorial desse número.

## Funcionalidade

A função `CalcularFatorial` realiza o cálculo do fatorial de um número \(n\), ou seja, ela retorna o produto de todos os números de 1 até \(n\). A função lida com números não negativos e retorna um erro caso um número negativo seja passado.

### Exemplo de uso:

```csharp
using System;
using Utilitarios;

class Program
{
    static void Main()
    {
        Console.WriteLine("Digite um número para calcular o fatorial:");
        int numero = int.Parse(Console.ReadLine());
        long fatorial = Calculadora.CalcularFatorial(numero);
        Console.WriteLine($"O fatorial de {numero} é {fatorial}");
    }
}
