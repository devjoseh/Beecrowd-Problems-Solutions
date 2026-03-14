using System;
using System.Linq;
using static System.Math;

class URI {
    static void Main(string[] args)
    {
        double[] eixoX = Console.ReadLine().Split().Select(double.Parse).ToArray();
        double[] eixoY = Console.ReadLine().Split().Select(double.Parse).ToArray();

        double Distancia = Math.Sqrt(Math.Pow(eixoY[0]-eixoX[0], 2) + Math.Pow(eixoY[1]-eixoX[1], 2));

        Console.WriteLine($"{Distancia:F4}");
    }
}