{-# LANGUAGE OverloadedStrings #-}
module Greeting where
import PlutusTx.Builtins (BuiltinByteString)
greeting :: BuiltinByteString
greeting = "Hello, DevAtlas!"
