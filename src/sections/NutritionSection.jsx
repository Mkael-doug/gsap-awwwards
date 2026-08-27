import { useMediaQuery } from "react-responsive"
import { nutrientLists } from "../constants"
import { useEffect, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const NutritionSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    })

    const [lists, setLists] = useState(nutrientLists)

    useEffect(() => {
        if (isMobile) {
            setLists(nutrientLists.slice(0, 3));
        } else {
            setLists(nutrientLists);
        }
    }, [isMobile]);

    useGSAP(() => {
        const titleSplit = SplitText.create(".nutrition-title", {
            type: "chars",
        });
        const paragraphSplit = SplitText.create(".nutrition-section p", {
            type: "words, lines",
            linesClass: "paragraph-line",
        })

        const contentTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top center",
                scrub: true,
                markers: true,
            }
        })
        contentTl.from(titleSplit.chars, {
            yPercent: 100,
            stagger: 0.02,
            ease: "power2.out",
        })
            .from(paragraphSplit.words, {
                yPercent: 300,
                rotate: 3,
                ease: "power1.inOut",
                duration: 1,
                stagger: 0.01,
            })
    })

    return (
        <section className="nutrition-section">
            {/* Imagem de transição superior */}
            <img src="/images/slider-dip.png" alt="/" className="w-full object-cover relative z-10" />

            {/* Imagem Central (Garrafa + Copo + Sorvete) Ancorada no Fundo */}
            <div className="big-img-wrapper">
                <img src="/images/big-img.png" alt="Product" className="big-img" />
            </div>

            {/* Container do Conteúdo Sobreposto */}
            <div className="nutrition-content">

                {/* Topo: Esquerda (Título) / Direita (Descrição) */}
                <div className="top-row">
                    <div className="title-container">
                        <h1 className="nutrition-title">It still does</h1>
                        <div className="nutrition-text-scroll">
                            <div className="sticker-bg">
                                <h2>Body Good</h2>
                            </div>
                        </div>
                    </div>

                    <div className="desc-container">
                        <p>
                            Milk contains a wide array of nutrients, including vitamins, minerals, and protein, and this is lactose free
                        </p>
                    </div>
                </div>

                {/* Base: Card de Nutrientes Sobreposto */}
                <div className="nutrition-box">
                    <div className="list-wrapper">
                        {lists.map((nutrient, index) => (
                            <div key={index} className="relative flex-1 col-center">
                                <div>
                                    <p className="nutrient-label">{nutrient.label}</p>
                                    <p className="nutrient-sub">up to</p>
                                    <p className="nutrient-amount">{nutrient.amount}</p>
                                </div>
                                {index !== lists.length - 1 && <div className="spacer-border" />}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default NutritionSection