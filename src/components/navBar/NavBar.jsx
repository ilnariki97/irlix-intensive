import React from 'react'

const navBar = ({onClickCategory}) => {
    const categories = [
        {name: "Все", category: "все"},
        {name: "Новинки", category: "новинки"},
        {name: "Сладкие", category: "сладкие"},
        {name: "Хит", category: "хит"},
        {name: "Крепкие", category: "крепкие"},
    ]
    return (
        <div className="nav-bar">
            <ul>
                {categories.map((category, index) => {
                    return <li key={`navBar-${index}`} onClick={() => {
                        onClickCategory(category.category)
                    }}>
                        {category.name}
                    </li>
                })}
            </ul>
        </div>
    );
}

export default navBar;
