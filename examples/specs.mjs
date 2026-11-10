export const sampleSpecs = [
  [
    "HTML",
    "html",
    "<!doctype html>\n<html lang=\"en\"><head><meta charset=\"utf-8\"><title>DevAtlas</title></head><body><h1>Hello, DevAtlas!</h1></body></html>"
  ],
  [
    "CSS",
    "css",
    ":root { color-scheme: light dark; }\nbody { font-family: system-ui, sans-serif; }\nh1 { color: rebeccapurple; }"
  ],
  [
    "JavaScript",
    "js",
    "function greet(name) { return 'Hello, ' + name + '!'; }\nconsole.log(greet('DevAtlas'));"
  ],
  [
    "TypeScript",
    "ts",
    "function greet(name: string): string { return 'Hello, ' + name + '!'; }\nconsole.log(greet('DevAtlas'));"
  ],
  [
    "JSX",
    "jsx",
    "import React from 'react';\nexport default function Greeting({ name = 'DevAtlas' }) { return <h1>Hello, {name}!</h1>; }"
  ],
  [
    "TSX",
    "tsx",
    "import React from 'react';\ntype Props = { name?: string };\nexport default function Greeting({ name = 'DevAtlas' }: Props) { return <h1>Hello, {name}!</h1>; }"
  ],
  [
    "SCSS",
    "scss",
    "$accent: #a993fa;\n.greeting { color: $accent; &:hover { text-decoration: underline; } }"
  ],
  [
    "Sass",
    "sass",
    "$accent: #a993fa\n.greeting\n  color: $accent\n  &:hover\n    text-decoration: underline"
  ],
  [
    "Less",
    "less",
    "@accent: #a993fa;\n.greeting { color: @accent; &:hover { text-decoration: underline; } }"
  ],
  [
    "CoffeeScript",
    "coffee",
    "greet = (name) -> \"Hello, #{name}!\"\nconsole.log greet \"DevAtlas\""
  ],
  [
    "Elm",
    "elm",
    "module Main exposing (main)\nimport Html exposing (Html, text)\nmain : Html msg\nmain = text \"Hello, DevAtlas!\""
  ],
  [
    "ReScript",
    "res",
    "let greet = (name: string): string => \"Hello, \" ++ name ++ \"!\"\nJs.log(greet(\"DevAtlas\"))"
  ],
  [
    "Dart",
    "dart",
    "String greet(String name) => 'Hello, $name!';\nvoid main() { print(greet('DevAtlas')); }"
  ],
  [
    "JavaScript (Node.js)",
    "cjs",
    "const os = require('node:os');\nconsole.log('Hello, DevAtlas!');\nconsole.log(os.platform());"
  ],
  [
    "Python",
    "py",
    "def greet(name: str) -> str:\n    return f\"Hello, {name}!\"\n\nif __name__ == \"__main__\":\n    print(greet(\"DevAtlas\"))"
  ],
  [
    "PHP",
    "php",
    "<?php\nfunction greet(string $name): string { return \"Hello, {$name}!\"; }\necho greet(\"DevAtlas\"), PHP_EOL;"
  ],
  [
    "Java",
    "java",
    "public class Main {\n    static String greet(String name) { return \"Hello, \" + name + \"!\"; }\n    public static void main(String[] args) { System.out.println(greet(\"DevAtlas\")); }\n}"
  ],
  [
    "C#",
    "cs",
    "using System;\nclass Program {\n    static string Greet(string name) => $\"Hello, {name}!\";\n    static void Main() => Console.WriteLine(Greet(\"DevAtlas\"));\n}"
  ],
  [
    "Go (Golang)",
    "go",
    "package main\nimport \"fmt\"\nfunc greet(name string) string { return fmt.Sprintf(\"Hello, %s!\", name) }\nfunc main() { fmt.Println(greet(\"DevAtlas\")) }"
  ],
  [
    "Ruby",
    "rb",
    "def greet(name)\n  \"Hello, #{name}!\"\nend\nputs greet(\"DevAtlas\")"
  ],
  [
    "Rust",
    "rs",
    "fn greet(name: &str) -> String { format!(\"Hello, {}!\", name) }\nfn main() { println!(\"{}\", greet(\"DevAtlas\")); }"
  ],
  [
    "Kotlin",
    "kt",
    "fun greet(name: String) = \"Hello, $name!\"\nfun main() { println(greet(\"DevAtlas\")) }"
  ],
  [
    "Scala",
    "scala",
    "object Main {\n  def greet(name: String): String = s\"Hello, $name!\"\n  def main(args: Array[String]): Unit = println(greet(\"DevAtlas\"))\n}"
  ],
  [
    "Elixir",
    "exs",
    "defmodule Greeting do\n  def greet(name), do: \"Hello, #{name}!\"\nend\nIO.puts(Greeting.greet(\"DevAtlas\"))"
  ],
  [
    "Erlang",
    "erl",
    "-module(hello).\n-export([main/0]).\nmain() -> io:format(\"Hello, DevAtlas!~n\")."
  ],
  [
    "Perl",
    "pl",
    "use strict;\nuse warnings;\nsub greet { my ($name) = @_; return \"Hello, $name!\"; }\nprint greet(\"DevAtlas\"), \"\\n\";"
  ],
  [
    "Lua",
    "lua",
    "local function greet(name) return 'Hello, ' .. name .. '!' end\nprint(greet('DevAtlas'))"
  ],
  [
    "Groovy",
    "groovy",
    "def greet(String name) { \"Hello, ${name}!\" }\nprintln greet(\"DevAtlas\")"
  ],
  [
    "Clojure",
    "clj",
    "(defn greet [name] (str \"Hello, \" name \"!\"))\n(println (greet \"DevAtlas\"))"
  ],
  [
    "F#",
    "fs",
    "let greet (name: string) = $\"Hello, {name}!\"\nprintfn \"%s\" (greet \"DevAtlas\")"
  ],
  [
    "Visual Basic .NET",
    "vb",
    "Module Program\n    Function Greet(name As String) As String\n        Return $\"Hello, {name}!\"\n    End Function\n    Sub Main()\n        Console.WriteLine(Greet(\"DevAtlas\"))\n    End Sub\nEnd Module"
  ],
  [
    "Swift",
    "swift",
    "func greet(_ name: String) -> String { return \"Hello, \\(name)!\" }\nprint(greet(\"DevAtlas\"))"
  ],
  [
    "Objective-C",
    "m",
    "#import <Foundation/Foundation.h>\nint main(int argc, const char *argv[]) {\n  @autoreleasepool { NSLog(@\"Hello, DevAtlas!\"); }\n  return 0;\n}"
  ],
  [
    "C++",
    "cpp",
    "#include <iostream>\n#include <string>\nstd::string greet(const std::string& name) { return \"Hello, \" + name + \"!\"; }\nint main() { std::cout << greet(\"DevAtlas\") << \"\\n\"; }"
  ],
  [
    "R",
    "r",
    "greet <- function(name) paste0(\"Hello, \", name, \"!\")\ncat(greet(\"DevAtlas\"), \"\\n\")"
  ],
  [
    "Julia",
    "jl",
    "greet(name::String) = \"Hello, $name!\"\nprintln(greet(\"DevAtlas\"))"
  ],
  [
    "MATLAB",
    "m",
    "name = 'DevAtlas';\ndisp(sprintf('Hello, %s!', name));"
  ],
  [
    "Lisp",
    "lisp",
    "(defun greet (name) (format nil \"Hello, ~a!\" name))\n(format t \"~a~%\" (greet \"DevAtlas\"))"
  ],
  [
    "Common Lisp",
    "lisp",
    "(defun greet (name) (format nil \"Hello, ~a!\" name))\n(format t \"~a~%\" (greet \"DevAtlas\"))"
  ],
  [
    "Prolog",
    "pro",
    "greet(Name) :- format('Hello, ~w!~n', [Name]).\n:- initialization(greet('DevAtlas'), main)."
  ],
  [
    "C",
    "c",
    "#include <stdio.h>\nvoid greet(const char *name) { printf(\"Hello, %s!\\n\", name); }\nint main(void) { greet(\"DevAtlas\"); return 0; }"
  ],
  [
    "Zig",
    "zig",
    "const std = @import(\"std\");\npub fn main() !void { std.debug.print(\"Hello, DevAtlas!\\n\", .{}); }"
  ],
  [
    "D",
    "d",
    "import std.stdio;\nvoid main() { writeln(\"Hello, DevAtlas!\"); }"
  ],
  [
    "Nim",
    "nim",
    "proc greet(name: string): string = \"Hello, \" & name & \"!\"\necho greet(\"DevAtlas\")"
  ],
  [
    "Fortran",
    "f90",
    "program hello\n  implicit none\n  print '(A)', 'Hello, DevAtlas!'\nend program hello"
  ],
  [
    "COBOL",
    "cob",
    "       IDENTIFICATION DIVISION.\n       PROGRAM-ID. HELLO.\n       PROCEDURE DIVISION.\n           DISPLAY 'Hello, DevAtlas!'.\n           STOP RUN."
  ],
  [
    "Pascal",
    "pas",
    "program Hello;\nbegin\n  Writeln('Hello, DevAtlas!');\nend."
  ],
  [
    "Object Pascal",
    "pas",
    "program Hello;\n{$APPTYPE CONSOLE}\nbegin\n  Writeln('Hello, DevAtlas!');\nend."
  ],
  [
    "SQL",
    "sql",
    "SELECT 'Hello, DevAtlas!' AS message;"
  ],
  [
    "PL/SQL",
    "sql",
    "BEGIN\n  DBMS_OUTPUT.PUT_LINE('Hello, DevAtlas!');\nEND;\n/"
  ],
  [
    "T-SQL",
    "sql",
    "DECLARE @name NVARCHAR(50) = N'DevAtlas';\nSELECT CONCAT('Hello, ', @name, '!') AS message;"
  ],
  [
    "PostgreSQL PL/pgSQL",
    "sql",
    "DO $$\nBEGIN\n  RAISE NOTICE 'Hello, DevAtlas!';\nEND;\n$$ LANGUAGE plpgsql;"
  ],
  [
    "GraphQL",
    "graphql",
    "query ExploreLanguages {\n  languages(category: \"web\") { name category }\n}"
  ],
  [
    "Cypher",
    "cypher",
    "MATCH (language:Language)-[:USED_FOR]->(field:Field)\nWHERE field.name = 'Web Development'\nRETURN language.name AS language;"
  ],
  [
    "SPARQL",
    "rq",
    "PREFIX schema: <https://schema.org/>\nSELECT ?name WHERE {\n  ?item a schema:SoftwareSourceCode ; schema:name ?name .\n} LIMIT 10"
  ],
  [
    "XPath",
    "xpath",
    "/catalog/language[@category='web']/name/text()"
  ],
  [
    "XQuery",
    "xq",
    "for $language in doc(\"catalog.xml\")/catalog/language\nwhere $language/@category = \"web\"\nreturn $language/name/text()"
  ],
  [
    "Bash",
    "bash",
    "#!/usr/bin/env bash\nset -euo pipefail\nname=\"DevAtlas\"\nprintf \"Hello, %s!\\n\" \"$name\""
  ],
  [
    "PowerShell",
    "ps1",
    "function Get-Greeting([string]$Name) { \"Hello, $Name!\" }\nGet-Greeting -Name \"DevAtlas\""
  ],
  [
    "Shell Script (sh)",
    "sh",
    "#!/bin/sh\nname=\"DevAtlas\"\nprintf \"Hello, %s!\\n\" \"$name\""
  ],
  [
    "Zsh",
    "zsh",
    "#!/usr/bin/env zsh\nname=\"DevAtlas\"\nprint \"Hello, ${name}!\""
  ],
  [
    "Fish",
    "fish",
    "set name DevAtlas\necho \"Hello, $name!\""
  ],
  [
    "HCL",
    "hcl",
    "locals {\n  project = \"DevAtlas\"\n  description = \"Developer language discovery\"\n}"
  ],
  [
    "Nix",
    "nix",
    "let name = \"DevAtlas\"; in \"Hello, ${name}!\""
  ],
  [
    "Make",
    "mk",
    ".PHONY: greet\ngreet:\n\t@printf 'Hello, DevAtlas!\\n'"
  ],
  [
    "AWK",
    "awk",
    "BEGIN { name = \"DevAtlas\"; printf \"Hello, %s!\\n\", name }"
  ],
  [
    "Tcl",
    "tcl",
    "proc greet {name} { return \"Hello, $name!\" }\nputs [greet DevAtlas]"
  ],
  [
    "Octave",
    "m",
    "name = 'DevAtlas';\nprintf('Hello, %s!\\n', name);"
  ],
  [
    "Solidity",
    "sol",
    "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\ncontract Greeting {\n  string public message = \"Hello, DevAtlas!\";\n}"
  ],
  [
    "Vyper",
    "vy",
    "# @version ^0.3.10\nmessage: public(String[64])\n@external\ndef __init__():\n    self.message = \"Hello, DevAtlas!\""
  ],
  [
    "Haskell",
    "hs",
    "greet :: String -> String\ngreet name = \"Hello, \" ++ name ++ \"!\"\nmain :: IO ()\nmain = putStrLn (greet \"DevAtlas\")"
  ],
  [
    "OCaml",
    "ml",
    "let greet name = \"Hello, \" ^ name ^ \"!\"\nlet () = print_endline (greet \"DevAtlas\")"
  ],
  [
    "Scheme",
    "scm",
    "(define (greet name) (string-append \"Hello, \" name \"!\"))\n(display (greet \"DevAtlas\"))\n(newline)"
  ],
  [
    "Racket",
    "rkt",
    "#lang racket\n(define (greet name) (string-append \"Hello, \" name \"!\"))\n(displayln (greet \"DevAtlas\"))"
  ],
  [
    "MicroPython",
    "py",
    "print('Hello, DevAtlas!')\n# MicroPython runs on supported microcontrollers."
  ],
  [
    "CircuitPython",
    "py",
    "print('Hello, DevAtlas!')\n# CircuitPython runs on supported boards."
  ],
  [
    "VHDL",
    "vhd",
    "library ieee;\nuse ieee.std_logic_1164.all;\nentity hello is end entity;\narchitecture sim of hello is\nbegin\n  process begin\n    report \"Hello, DevAtlas!\";\n    wait;\n  end process;\nend architecture;"
  ],
  [
    "Verilog",
    "v",
    "module hello;\n  initial begin\n    $display(\"Hello, DevAtlas!\");\n    $finish;\n  end\nendmodule"
  ],
  [
    "SystemVerilog",
    "sv",
    "module hello;\n  initial begin\n    string name = \"DevAtlas\";\n    $display(\"Hello, %s!\", name);\n    $finish;\n  end\nendmodule"
  ],
  [
    "Arduino Language (C/C++ based)",
    "ino",
    "void setup() {\n  Serial.begin(9600);\n  Serial.println(\"Hello, DevAtlas!\");\n}\nvoid loop() {}"
  ],
  [
    "XML",
    "xml",
    "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<catalog><language category=\"web\"><name>JavaScript</name></language></catalog>"
  ],
  [
    "JSON",
    "json",
    "{\"project\":\"DevAtlas\",\"message\":\"Hello, DevAtlas!\",\"languages\":[\"JavaScript\",\"Python\",\"Rust\"]}"
  ],
  [
    "JSON5",
    "json5",
    "{\n  // JSON with comments and trailing commas\n  project: 'DevAtlas',\n  languages: ['JavaScript', 'Python', 'Rust',],\n}"
  ],
  [
    "YAML",
    "yaml",
    "project: DevAtlas\nmessage: Hello, DevAtlas!\nlanguages:\n  - JavaScript\n  - Python\n  - Rust"
  ],
  [
    "TOML",
    "toml",
    "project = \"DevAtlas\"\nmessage = \"Hello, DevAtlas!\"\nlanguages = [\"JavaScript\", \"Python\", \"Rust\"]"
  ],
  [
    "INI",
    "ini",
    "[project]\nname = DevAtlas\nmessage = Hello, DevAtlas!"
  ],
  [
    "Markdown",
    "md",
    "# Hello, DevAtlas!\n\nExplore a language, build a small project, and share what you learn."
  ],
  [
    "LaTeX",
    "tex",
    "\\documentclass{article}\n\\begin{document}\n\\section*{Hello, DevAtlas!}\nDiscover a language and build something useful.\n\\end{document}"
  ],
  [
    "SVG",
    "svg",
    "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 80\">\n<rect width=\"300\" height=\"80\" fill=\"#171a29\"/>\n<text x=\"20\" y=\"48\" fill=\"#c9baff\" font-size=\"24\">Hello, DevAtlas!</text>\n</svg>"
  ],
  [
    "XSLT",
    "xsl",
    "<?xml version=\"1.0\"?>\n<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">\n<xsl:template match=\"/\"><html><body><h1>Hello, DevAtlas!</h1></body></html></xsl:template>\n</xsl:stylesheet>"
  ]
];

sampleSpecs.push(...[
  [
    "ABAP",
    "abap",
    "REPORT z_hello_devatlas.\nSTART-OF-SELECTION.\n  WRITE: / 'Hello, DevAtlas!'."
  ],
  [
    "APL",
    "apl",
    "'Hello, DevAtlas!'"
  ],
  [
    "ActionScript",
    "as",
    "package {\n  import flash.display.Sprite;\n  public class Main extends Sprite {\n    public function Main() { trace(\"Hello, DevAtlas!\"); }\n  }\n}"
  ],
  [
    "Ada",
    "adb",
    "with Ada.Text_IO;\nprocedure Hello is\nbegin\n  Ada.Text_IO.Put_Line(\"Hello, DevAtlas!\");\nend Hello;"
  ],
  [
    "Apex",
    "cls",
    "public class Greeting {\n  public static String hello() { return 'Hello, DevAtlas!'; }\n}"
  ],
  [
    "BASIC",
    "bas",
    "PRINT \"Hello, DevAtlas!\""
  ],
  [
    "Ballerina",
    "bal",
    "import ballerina/io;\npublic function main() {\n  io:println(\"Hello, DevAtlas!\");\n}"
  ],
  [
    "Cairo",
    "cairo",
    "fn main() {\n    println!(\"Hello, DevAtlas!\");\n}"
  ],
  [
    "Chapel",
    "chpl",
    "proc main() {\n  writeln(\"Hello, DevAtlas!\");\n}"
  ],
  [
    "Chisel",
    "scala",
    "import chisel3._\nclass Constant extends Module {\n  val io = IO(new Bundle { val out = Output(UInt(8.W)) })\n  io.out := 42.U\n}"
  ],
  [
    "Clarity",
    "clar",
    "(define-read-only (greeting)\n  (ok \"Hello, DevAtlas!\"))"
  ],
  [
    "ColdFusion Markup Language (CFML)",
    "cfm",
    "<cfset name = \"DevAtlas\">\n<cfoutput>Hello, #name#!</cfoutput>"
  ],
  [
    "Crystal",
    "cr",
    "def greet(name : String)\n  \"Hello, #{name}!\"\nend\nputs greet(\"DevAtlas\")"
  ],
  [
    "DAX",
    "dax",
    "EVALUATE\nROW(\"Message\", \"Hello, DevAtlas!\")"
  ],
  [
    "Delphi (Object Pascal)",
    "dpr",
    "program Hello;\n{$APPTYPE CONSOLE}\nbegin\n  Writeln('Hello, DevAtlas!');\nend."
  ],
  [
    "Eiffel",
    "e",
    "class HELLO\ncreate make\nfeature\n  make\n    do\n      print (\"Hello, DevAtlas!%N\")\n    end\nend"
  ],
  [
    "Fantom",
    "fan",
    "class Hello {\n  static Void main() { echo(\"Hello, DevAtlas!\") }\n}"
  ],
  [
    "Factor",
    "factor",
    "USING: io ;\n\"Hello, DevAtlas!\" print"
  ],
  [
    "Forth",
    "fth",
    ".\" Hello, DevAtlas!\" cr"
  ],
  [
    "FreeBASIC",
    "bas",
    "print \"Hello, DevAtlas!\""
  ],
  [
    "GDScript",
    "gd",
    "extends SceneTree\nfunc _init():\n    print(\"Hello, DevAtlas!\")\n    quit()"
  ],
  [
    "GLSL",
    "frag",
    "#version 330 core\nout vec4 FragColor;\nvoid main() { FragColor = vec4(0.69, 0.61, 1.0, 1.0); }"
  ],
  [
    "HLSL",
    "hlsl",
    "float4 main() : SV_Target {\n  return float4(0.69, 0.61, 1.0, 1.0);\n}"
  ],
  [
    "Hack",
    "hh",
    "<?hh\n<<__EntryPoint>>\nfunction main(): void {\n  echo \"Hello, DevAtlas!\\n\";\n}"
  ],
  [
    "IDL",
    "pro",
    "PRO hello\n  PRINT, 'Hello, DevAtlas!'\nEND"
  ],
  [
    "Idris",
    "idr",
    "module Main\nmain : IO ()\nmain = putStrLn \"Hello, DevAtlas!\""
  ],
  [
    "Io",
    "io",
    "\"Hello, DevAtlas!\" println"
  ],
  [
    "J",
    "ijs",
    "echo 'Hello, DevAtlas!'"
  ],
  [
    "Janet",
    "janet",
    "(print \"Hello, DevAtlas!\")"
  ],
  [
    "K",
    "k",
    "\"Hello, DevAtlas!\""
  ],
  [
    "Logo",
    "logo",
    "print [Hello, DevAtlas!]"
  ],
  [
    "M (Power Query)",
    "pq",
    "let\n  Greeting = \"Hello, DevAtlas!\"\nin\n  Greeting"
  ],
  [
    "MDX",
    "mdx",
    "WITH MEMBER [Measures].[Greeting] AS '\"Hello, DevAtlas!\"'\nSELECT [Measures].[Greeting] ON COLUMNS\nFROM [Cube]"
  ],
  [
    "Mercury",
    "m",
    ":- module hello.\n:- interface.\n:- import_module io.\n:- pred main(io::di, io::uo) is det.\n:- implementation.\nmain(!IO) :- io.write_string(\"Hello, DevAtlas!\\n\", !IO)."
  ],
  [
    "Michelson",
    "tz",
    "parameter unit;\nstorage string;\ncode { CDR; NIL operation; PAIR };"
  ],
  [
    "Modula-2",
    "mod",
    "MODULE Hello;\nFROM InOut IMPORT WriteString, WriteLn;\nBEGIN\n  WriteString('Hello, DevAtlas!');\n  WriteLn\nEND Hello."
  ],
  [
    "Move",
    "move",
    "module 0x1::greeting {\n  public fun answer(): u64 { 42 }\n}"
  ],
  [
    "PL/I",
    "pli",
    "hello: proc options(main);\n  put skip list('Hello, DevAtlas!');\nend hello;"
  ],
  [
    "PeopleCode",
    "pcode",
    "MessageBox(0, \"\", 0, 0, \"Hello, DevAtlas!\");"
  ],
  [
    "Pony",
    "pony",
    "actor Main\n  new create(env: Env) =>\n    env.out.print(\"Hello, DevAtlas!\")"
  ],
  [
    "Power Fx",
    "fx",
    "\"Hello, \" & \"DevAtlas!\""
  ],
  [
    "Progress OpenEdge ABL",
    "p",
    "MESSAGE \"Hello, DevAtlas!\" VIEW-AS ALERT-BOX."
  ],
  [
    "PureScript",
    "purs",
    "module Main where\nimport Prelude\nimport Effect (Effect)\nimport Effect.Console (log)\nmain :: Effect Unit\nmain = log \"Hello, DevAtlas!\""
  ],
  [
    "Q",
    "q",
    "show \"Hello, DevAtlas!\""
  ],
  [
    "QBasic",
    "bas",
    "PRINT \"Hello, DevAtlas!\""
  ],
  [
    "RPG",
    "rpgle",
    "**FREE\nctl-opt dftactgrp(*no);\ndsply ('Hello, DevAtlas!');\n*inlr = *on;"
  ],
  [
    "Raku",
    "raku",
    "say \"Hello, DevAtlas!\";"
  ],
  [
    "Rebol",
    "reb",
    "REBOL [Title: \"Hello\"]\nprint \"Hello, DevAtlas!\""
  ],
  [
    "Red",
    "red",
    "Red [Title: \"Hello\"]\nprint \"Hello, DevAtlas!\""
  ],
  [
    "SAS",
    "sas",
    "data _null_;\n  put \"Hello, DevAtlas!\";\nrun;"
  ],
  [
    "Smalltalk",
    "st",
    "Transcript show: 'Hello, DevAtlas!'; cr."
  ],
  [
    "Standard ML",
    "sml",
    "val _ = print \"Hello, DevAtlas!\\n\";"
  ],
  [
    "Stata",
    "do",
    "display \"Hello, DevAtlas!\""
  ],
  [
    "UnrealScript",
    "uc",
    "class Hello extends Object;\nstatic function string Greet() {\n  return \"Hello, DevAtlas!\";\n}"
  ],
  [
    "V",
    "v",
    "fn main() {\n  println('Hello, DevAtlas!')\n}"
  ],
  [
    "VBA",
    "bas",
    "Sub Main()\n    Debug.Print \"Hello, DevAtlas!\"\nEnd Sub"
  ],
  [
    "Visual Basic",
    "bas",
    "Sub Main()\n    MsgBox \"Hello, DevAtlas!\"\nEnd Sub"
  ],
  [
    "Wolfram Language",
    "wl",
    "Print[\"Hello, DevAtlas!\"]"
  ],
  [
    "X++",
    "xpp",
    "class Hello {\n  public static void main(Args _args) {\n    info(\"Hello, DevAtlas!\");\n  }\n}"
  ]
]);


sampleSpecs.push(...[
  [
    "Assembly",
    "asm",
    "section .data\n    msg db \"Hello, DevAtlas!\", 10\n    len equ $ - msg\nsection .text\n    global _start\n_start:\n    mov eax, 1\n    mov edi, 1\n    lea rsi, [rel msg]\n    mov edx, len\n    syscall\n    mov eax, 60\n    xor edi, edi\n    syscall"
  ],
  [
    "Carbon",
    "carbon",
    "package devatlas api;\nfn Main() -> i32 {\n    Print(\"Hello, DevAtlas!\");\n    return 0;\n}\n// Carbon syntax is experimental and may change."
  ],
  [
    "Verse",
    "verse",
    "using { /Fortnite.com/Devices }\nusing { /Verse.org/Simulation }\nhello_world_device := class(creative_device):\n    OnBegin<override>()<suspends>:void=\n        Print(\"Hello, DevAtlas!\")"
  ],
  [
    "Plutus (Haskell)",
    "hs",
    "{-# LANGUAGE OverloadedStrings #-}\nmodule Greeting where\nimport PlutusTx.Builtins (BuiltinByteString)\ngreeting :: BuiltinByteString\ngreeting = \"Hello, DevAtlas!\""
  ],
  [
    "FunC",
    "fc",
    "() recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {\n    ;; Minimal TON FunC internal message handler.\n}"
  ],
  [
    "Tact",
    "tact",
    "contract Hello {\n    get fun greeting(): String {\n        return \"Hello, DevAtlas!\";\n    }\n}"
  ],
  [
    "Agda",
    "agda",
    "module Hello where\nopen import Agda.Builtin.String\ngreeting : String\ngreeting = \"Hello, DevAtlas!\""
  ],
  [
    "Haxe",
    "hx",
    "class Main {\n    static function main() {\n        trace(\"Hello, DevAtlas!\");\n    }\n}"
  ]
]);

