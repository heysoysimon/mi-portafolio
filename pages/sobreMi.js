import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Sobremi.module.css"
const SobreMi = () => {
  return (
    <div>

        <div className={styles.biografia}>
            <div className={styles.ImagenBio}>
                {/* imagen */}
                <Image
                    className={styles.yo}
                    src="/imagenYo.JPG" 
                    width={400}
                    height={700}
                    alt="Sobre mi "

                ></Image>
            </div>

            <div>
                {/* textos */}
                <h1> sobre mi</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt nisl at diam placerat viverra. Quisque vitae felis sit amet metus venenatis auctor sed at sem. Donec accumsan, ex in vehicula congue, odio lorem imperdiet dolor, ac sodales ante turpis quis est. Cras a lectus sit amet 
                risus auctor volutpat. Etiam eu facilisis ante, id suscipit nunc. Morbi eu malesuada neque. Aenean eros sapien, dapibus eget enim eget, suscipit aliquet augue. Morbi tempus vestibulum ipsum, ac fermentum justo sodales non. Fusce bibendum dapibus massa quis dictum. Duis augue nisl, malesuada 
                ullamcorper velit ac, blandit ultrices nibh. Nunc mollis turpis ut lacinia mattis. Duis placerat ligula lacus, eu porttitor leo blandit tristique. Nullam eu pretium augue. Nam in eleifend turpis, ac tristique est.

                </p>
                <Link href="/">
            <a> volver</a>
        </Link>
            </div>
        </div>
    </div>
  )
}

export default SobreMi
