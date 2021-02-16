import { basicSetup, EditorState, EditorView } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';
import { keymap } from '@codemirror/view';

import { myHighlightStyle } from './highlight';
import { myTheme } from './theme';
import { uppercaseKeybinding } from './uppercase';

const initialState = EditorState.create({
  doc: '',
  extensions: [
    basicSetup,
    javascript(),
    keymap.of([uppercaseKeybinding]),
    myTheme,
    myHighlightStyle,
  ],
});

const view = new EditorView({
  parent: document.getElementById('editor'),
  state: initialState,
});

window.view = view;
