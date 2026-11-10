library ieee;
use ieee.std_logic_1164.all;
entity hello is end entity;
architecture sim of hello is
begin
  process begin
    report "Hello, DevAtlas!";
    wait;
  end process;
end architecture;
