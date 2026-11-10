Module Program
    Function Greet(name As String) As String
        Return $"Hello, {name}!"
    End Function
    Sub Main()
        Console.WriteLine(Greet("DevAtlas"))
    End Sub
End Module
