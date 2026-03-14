using System; 

class URI {
    static void Main(string[] args) { 
        double TempoGasto = double.Parse(Console.ReadLine());
        double VelocidadeMedia = double.Parse(Console.ReadLine());

        Console.WriteLine($"{TempoGasto*VelocidadeMedia/12:F3}");
    }
}