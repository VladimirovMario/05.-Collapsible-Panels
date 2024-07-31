import { useState } from 'react';

export default function ContainerWithKnownHeight() {
    const [toggleIsOpen, setToggleIsOpen] = useState(false);

    const handleToggle = () => setToggleIsOpen(!toggleIsOpen);

    let className = 'toggle-container';
    if (toggleIsOpen) {
        className += ' open';
    }

    return (
        <div className="container">
            <button className="toggleButton" onClick={handleToggle}>
                Toggle Container with Known Height
            </button>
            <div className={className}>
                <p style={{ padding: '12px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    At, adipisci aspernatur sed velit sequi vero, officiis
                    ipsam, alias incidunt nisi voluptatibus. Id, beatae
                    recusandae. Magnam at exercitationem ipsam architecto
                    accusamus. Eligendi in hic facere temporibus repellat
                    incidunt, consequatur molestiae fugit, illo ratione atque
                    sapiente adipisci aspernatur omnis reprehenderit animi nam
                    earum dignissimos impedit dolores est. Corrupti id provident
                    animi repellat. Rem omnis nihil sint mollitia veritatis
                    nesciunt! Facere voluptatum eligendi cumque et quam
                    doloremque, sequi alias id nisi adipisci ad officia, iusto
                    facilis nesciunt optio architecto rerum consectetur animi
                    quaerat! Odio asperiores, pariatur numquam maiores impedit
                    iste perferendis voluptas voluptate earum, hic id qui
                    molestias fuga nostrum itaque nesciunt quam corrupti nemo
                    voluptatibus amet. Maxime totam corrupti ex sed nisi.
                    Nostrum quos sunt ducimus, deleniti, doloremque ullam
                    quisquam unde illum recusandae culpa fugit quod quo quia
                    architecto magni. Provident obcaecati minima ipsum nihil
                    quas soluta ab iusto qui nisi rem? A saepe, sint ea
                    exercitationem rerum minima vero. Dolorem eaque voluptates
                    illum sint tempore blanditiis veniam suscipit, quibusdam
                    ipsa recusandae in saepe! Alias inventore atque doloremque
                    harum! Quo, veritatis provident? Ratione temporibus,
                    delectus autem voluptate deleniti fugit natus porro ut.
                    Distinctio facilis itaque, officiis quas quaerat maiores
                    minus nihil! Id repellendus earum sapiente animi quos,
                    dolore facilis commodi. Nam, repellendus? Quas expedita
                    voluptates voluptatem velit eum, dolorum molestias quod
                    accusantium at nesciunt quis impedit modi nostrum aspernatur
                    ipsa neque voluptatum doloremque earum non corporis vero.
                    Sunt impedit soluta asperiores aperiam. Facilis est quam
                    excepturi? Mollitia hic doloremque ad amet esse repudiandae,
                    nemo illum eveniet accusamus alias et consequatur itaque.
                    Odit nisi laudantium enim omnis et est dolores maiores
                    perferendis labore! Illo ea similique dicta cumque rem.
                    Provident saepe corporis quibusdam quis molestiae quos
                    expedita architecto labore eveniet. Excepturi eaque
                    repellendus commodi eligendi rerum laborum nihil debitis
                    nesciunt, perspiciatis blanditiis explicabo!
                </p>
            </div>
        </div>
    );
}
