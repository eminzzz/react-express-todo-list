import cn from "classnames";

export const List = ({ children }) => {
  return <ul className="list-group">{children}</ul>;
};

export const Item = ({ item, deleteTodo, toggleTodo }) => {
  return (
    <li className={cn("list-group-item", {"list-group-item-secondary": item.isComplete})}>
      <div className="d-flex justify-content-between align-items-center">
        <div
          className={cn("text", {
            "text-decoration-line-through": item.isComplete,
          })}
        >
          {item.title}
        </div>
        <div className="buttons">
          <button
            onClick={() => toggleTodo(item.id)}
            className={cn("btn", {
              "btn-success": !item.isComplete,
              "btn-warning": item.isComplete,
            })}
          >
           {!item.isComplete ? "✓" : "⎌"}
          </button>
          <button
            onClick={() => deleteTodo(item)}
            className="btn btn-danger ms-2"
          >
            &times;
          </button>
        </div>
      </div>
    </li>
  );
};
