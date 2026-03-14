using System;
using System.Linq;

class URI {
    static void Main(string[] args)
    {
        double[] PD1 = Console.ReadLine().Split().Select(double.Parse).ToArray();
        double[] PD2 = Console.ReadLine().Split().Select(double.Parse).ToArray();

        Console.WriteLine($"VALOR A PAGAR: R$ {PD1[1]*PD1[2] + PD2[1]*PD2[2]:F2}");
    }
}