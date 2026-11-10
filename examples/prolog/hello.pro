greet(Name) :- format('Hello, ~w!~n', [Name]).
:- initialization(greet('DevAtlas'), main).
