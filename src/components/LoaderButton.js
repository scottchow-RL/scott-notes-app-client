import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './LoaderButton.css';

export default function LoaderButton({isLoading, className="", disabled = false, ...props}) {
    return (
        <Button className={`LoaderButton ${className}`} disabled={disabled || isLoading} {...props}>
            {isLoading && <Glyphicon glyph="refresh" className="spinnging" />}
            {props.children}
        </Button>
    )
}