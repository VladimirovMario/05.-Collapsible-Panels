import { useState } from 'react';

export default function BasicCollapsiblePanel() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        if (isOpen) {
            setIsOpen(false);
            setTimeout(() => setIsVisible(false), 500); // Wait for the animation to finish
        } else {
            setIsVisible(true);
            setTimeout(() => setIsOpen(true), 10); // Delay to allow display: block to take effect
        }
    };

    let className = 'initial-state hidden';

    if (isVisible) {
        className = 'initial-state show';
    }

    if (isOpen) {
        className += ' open';
    }

    return (
        <div className="container">
            <button
                className="toggleButton"
                type="button"
                onClick={handleToggle}
            >
                Basic Collapsible Panel
            </button>

            <div className={className}>
                ...Panel Content Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Rerum sapiente unde necessitatibus cupiditate
                alias in dicta, vitae consequuntur repudiandae deserunt,
                praesentium veniam officiis magnam. Quaerat ratione tempora
                perferendis sequi atque!
            </div>
        </div>
    );
}
