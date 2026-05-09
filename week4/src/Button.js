function Button(properties) {
    return (
        <button onClick={properties.onClick}>
            {properties.children}
        </button>

    )
}

export default Button;