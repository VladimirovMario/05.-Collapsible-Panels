import { useRef, useState } from 'react';

export default function CollapsiblePanelWithJavascript() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const panelRef = useRef(null);

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
            <button className="toggleButton" onClick={handleToggle}>
                Collapsible Panel With Javascript
            </button>
            <div
                className="panel"
                ref={panelRef}
                style={{
                    height: isOpen ? `${panelRef.current.scrollHeight}px` : '0',
                }}
            >
                <p className={className}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia sint odio perferendis harum! Quo placeat qui at sunt
                    id, ipsa nam dolorum ratione ex fugit ad quidem, facilis
                    aspernatur delectus! Rerum veritatis nemo reprehenderit,
                    unde mollitia aperiam quidem libero commodi explicabo
                    blanditiis soluta quo quaerat. Doloribus consectetur sit,
                    quos quo voluptatum atque quaerat provident distinctio optio
                    excepturi dolores, saepe recusandae! Aspernatur dolore ab
                    molestiae molestias nulla reprehenderit culpa vel nobis,
                    maxime fuga, suscipit nihil illo ducimus quis excepturi
                    eaque officiis sint. Sapiente ex quae velit aliquam minus
                    magni accusantium eos? Fugit aperiam nam mollitia tenetur
                    maiores voluptatibus distinctio officia aliquam laboriosam,
                    magnam maxime! Voluptatem expedita iure unde magni eos
                    distinctio consectetur, possimus accusantium maiores alias
                    similique quo ullam. Ipsa, eaque. Consequatur est blanditiis
                    impedit facere vitae sed inventore numquam dolorum officia
                    distinctio at modi commodi temporibus fuga similique
                    aspernatur a unde, debitis ratione incidunt vel ipsam.
                </p>
            </div>
        </div>
    );
}
