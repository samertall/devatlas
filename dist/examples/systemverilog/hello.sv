module hello;
  initial begin
    string name = "DevAtlas";
    $display("Hello, %s!", name);
    $finish;
  end
endmodule
