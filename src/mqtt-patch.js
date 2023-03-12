import buffer from 'buffer';
import process from 'process';

// Hack to get mqtt package work with Webpack 5
window.Buffer = buffer.Buffer;
window.process = process;

export {};