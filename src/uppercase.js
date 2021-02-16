function uppercaseRange(range, state) {
  const originalText = state.sliceDoc(range.from, range.to);
  const newText = originalText.toUpperCase();

  const change = {
    from: range.from,
    insert: newText,
    to: range.to,
  };

  const transactionForRange = {
    changes: change,
    range,
  };

  return transactionForRange;
}

export function uppercase(view) {
  const transaction = view.state.changeByRange((range) =>
    uppercaseRange(range, view.state),
  );
  view.dispatch(transaction);

  return true;
}

export const uppercaseKeybinding = {
  key: 'Ctrl-u',
  run: uppercase,
};
