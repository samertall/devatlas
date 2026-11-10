import React from 'react';
type Props = { name?: string };
export default function Greeting({ name = 'DevAtlas' }: Props) { return <h1>Hello, {name}!</h1>; }
