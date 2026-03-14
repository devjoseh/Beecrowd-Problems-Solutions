using System; 

class URI {
    static void Main(string[] args)
    {
        double A = double.Parse(Console.ReadLine());
        double B = double.Parse(Console.ReadLine());

        double Media = ((A * 3.5) + (B * 7.5)) / (3.5 + 7.5);

        Console.WriteLine($"MEDIA = {Media:F5}");
    }
}