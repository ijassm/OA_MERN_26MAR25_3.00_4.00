import React from 'react'
import clsx from 'clsx';
import * as PropTypes from "prop-types";


export function Button({ children, variant = "default", className, ...props }) {
    const baseStyles = "px-4 py-2 rounded font-semibold";

    const variantStyles = {
        filled: "bg-green-500 text-white",
        outlined: "border-2 border-black text-black bg-transparent",
        default: "bg-black text-white"
    };

    return (
        <button
            {...props}
            className={clsx(baseStyles, variantStyles[variant], className)}
        >
            {children}
        </button>
    )
}

// ✅ Prop validation
Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['filled', 'outlined', 'default']),
    className: PropTypes.string,
    onClick: PropTypes.func,
};