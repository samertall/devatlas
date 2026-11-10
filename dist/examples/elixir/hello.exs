defmodule Greeting do
  def greet(name), do: "Hello, #{name}!"
end
IO.puts(Greeting.greet("DevAtlas"))
