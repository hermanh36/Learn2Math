import { BoldExtension } from 'remirror/extensions';
import { EditorComponent, Remirror, useRemirror } from '@remirror/react';
import { useCommands } from '@remirror/react';

export const Menu = () => {
  const { toggleBold, focus } = useCommands();

  return (
    <button
      onClick={() => {
        toggleBold();
        focus();
      }}
    >
      B
    </button>
  );
};


export const MyEditor = () => {
  const { manager, state } = useRemirror({
    extensions: () => [new BoldExtension()],
    content: '<p>I love <b>Remirror</b></p>',
    selection: 'start',
    stringHandler: 'html',
  });

  return (
    <div className='remirror-theme'>
      <h1>test</h1>
      <Remirror manager={manager} initialContent={state}>
        {/* The text editor is placed above the menu to make the zIndex easier to manage for popups */}
        <EditorComponent />
        <Menu />
      </Remirror>
    </div>
  );
};