import { useEffect, useRef, useState } from 'react';

export default function ExperimentalToggleWithAttribute() {
    const ref = useRef(null);
    const [toggleIsOpen, setToggleIsOpen] = useState(false);

    const handleToggle = () => setToggleIsOpen(!toggleIsOpen);

    useEffect(() => {
        ref.current.toggleAttribute('open', toggleIsOpen);
    }, [toggleIsOpen]);

    return (
        <div className="container">
            <button className="toggleButton" onClick={handleToggle}>
                Experimental Toggle with Attribute
            </button>
            <div className="content-container" ref={ref}>
                <p style={{ padding: '12px 24px', margin: 0 }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Architecto voluptatum aliquam veritatis hic quae molestiae
                    harum aperiam esse, corrupti explicabo exercitationem dolor
                    repellat illo in perspiciatis. Esse placeat et ex.
                </p>
            </div>
        </div>
    );
}
