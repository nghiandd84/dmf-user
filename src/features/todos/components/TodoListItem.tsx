import * as React from 'react';

interface Props {
  title: string;
  onRemoveClick: () => void;
}

function TodoListItem({ title, onRemoveClick }: Props) {
  return (
    <div>
      {title}
      <div onClick={onRemoveClick}>X</div>
    </div>
  );
}

export default TodoListItem;
