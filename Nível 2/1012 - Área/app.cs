using System;
using System.Linq;

class URI {
    static void Main(string[] args)
    {
        double[] Values = Console.ReadLine().Split().Select(double.Parse).ToArray();

        Console.WriteLine($"TRIANGULO: {Values[0]*Values[2]/2:F3}");
        Console.WriteLine($"CIRCULO: {3.14159*(Values[2]*Values[2]):F3}");
        Console.WriteLine($"TRAPEZIO: {((Values[0]+Values[1])*Values[2])/2:F3}");
        Console.WriteLine($"QUADRADO: {Values[1]*Values[1]:F3}");
        Console.WriteLine($"RETANGULO: {Values[0]*Values[1]:F3}");
    }
}