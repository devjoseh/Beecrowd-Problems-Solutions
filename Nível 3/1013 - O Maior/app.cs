using System;
using System.Linq;
using static System.Math;

class URI {
    static void Main(string[] args)
    {
        int[] Values = Console.ReadLine().Split().Select(int.Parse).ToArray();

        int MaiorAB = (Values[0]+Values[1]+Abs(Values[0]-Values[1]))/2;
        int MaiorFinal = MaiorAB > Values[2] ? MaiorAB : Values[2];

        Console.WriteLine($"{MaiorFinal} eh o maior");
    }
}