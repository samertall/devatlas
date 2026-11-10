import chisel3._
class Constant extends Module {
  val io = IO(new Bundle { val out = Output(UInt(8.W)) })
  io.out := 42.U
}
