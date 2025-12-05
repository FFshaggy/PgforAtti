(function() {
    // Datos de los clientes
    const clientes = [
        {
            nombre: "Instituto Gema",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/InstGema.webp"
        },
        {
            nombre: "Congregación Misionera Siervas del Espíritu Santo",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/ChatGPTImage3dic2025093614p.webp"
        },
        {
            nombre: "Instituto Espíritu Santo",
            ubicacion: "Leandro N. Alem, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/InstSEspiritu.webp"
        },
        {
            nombre: "Instituto Superior La Inmaculada",
            ubicacion: "Apóstoles, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/InmacLogo.webp"
        },
        {
            nombre: "Instituto Nuestra Señora de Fátima",
            ubicacion: "Gob. Roca, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/NSSFLogo.webp"
        },
        {
            nombre: "Instituto San Alberto Magno",
            ubicacion: "Puerto Rico, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/ISAMLogo.webp"
        },
        {
            nombre: "Instituto Superior Santa María",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/SantaMaria.webp"
        },
        {
            nombre: "Instituto Superior San Roque González",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/RoqueGonLogo.webp"
        },
        {
            nombre: "Fundación Villa Cabello Misiones",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/VillaCabello.webp"
        },
        {
            nombre: "Instituto Inmaculado Corazón de María",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/InmCorazonM.webp"
        },
        {
            nombre: "Instituto Padre Isidro Gerber",
            ubicacion: "Panambí, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/IsidGerber.webp"
        },
        {
            nombre: "Instituto Superior Verbo Divino",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/VerboDivino.webp"
        },
        {
            nombre: "Jardín Maternal y comedor, Nuestra Señora de Schoenstatt",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/SchoenstattLogo.webp"
        },
        {
            nombre: "Instituto San Juan Pablo II",
            ubicacion: "Puerto Rico, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/JuanPablo2Logo.webp"
        },
        {
            nombre: "Instituto Santa Barbara",
            ubicacion: "Apóstoles, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/SantaBarbara-(3544).webp"
        },
        {
            nombre: "Instituto San Francisco de Asis",
            ubicacion: "Eldorado, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/sanfranciscoasis.webp"
        },
        {
            nombre: "Instituto Santa María de las Misiones",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/SantamMisiones.webp"
        },
        {
            nombre: "Instituto Inmaculada Concepción",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/InmaConcep-(7561).webp"
        },
        {
            nombre: "Instituto Privado Nuestra Señora de Lourdes",
            ubicacion: "Campo Grande, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/LourdesLogo-(5725).webp"
        },
        {
            nombre: "Instituto Padre Juan Markievicz",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/PadreMarkievicz.webp"
        },
        {
            nombre: "Colegio Mariano",
            ubicacion: "Oberá, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/ColMariano1.webp"
        },
        {
            nombre: "Instituto Superior Saltos del Moconá",
            ubicacion: "El Soberbio, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/cropped-logomocona.webp"
        },
        {
            nombre: "Instituto Superior Andres Guacurarí",
            ubicacion: "Cerro Azul, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/AndrGuacurari.webp"
        },
        {
            nombre: "Instituto Santo Cura Brochero",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/Brochero.webp"
        },
        {
            nombre: "Instituto Jardín Modelo",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/JardinModelo.webp"
        },
        {
            nombre: "CEI San Jorge",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/CEISanJorge.webp"
        },
        {
            nombre: "CEI San Francisco",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/CEISanFrancis-(2513).webp"
        },
        {
            nombre: "CEI Santa Cecilia",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/CEISantaCeci.webp"
        },
        {
            nombre: "Instituto Superior Espíritu Santo",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/IESLOGO.webp"
        },
        {
            nombre: "Instituto Ceferino Namuncurá",
            ubicacion: "San Vicente, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/CefNamuncura.webp"
        },
        {
            nombre: "Instituto Superior Pedro Goyena",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/PedroGoyena.webp"
        },
        {
            nombre: "Instituto Superior Huellas Misioneras",
            ubicacion: "Eldorado, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/HuellasMisione.webp"
        },
        {
            nombre: "Col. Argentino-Americano",
            ubicacion: "Iguazú, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/ColArgentinoAmericano.webp"
        },
        {
            nombre: "Colegio del Carmen",
            ubicacion: "Posadas, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/ColdelCarmen.webp"
        },
        {
            nombre: "Instituto Nstra. Sra. de Fátima",
            ubicacion: "Garupá, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/NtraSraFatimaGarupa.webp"
        },
        {
            nombre: "Instituto Superior Yabotí",
            ubicacion: "Garupá, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/InstYaboti.webp"
        },
        {
            nombre: "Fundación Alfa",
            ubicacion: "Posadas/Oberá/Eldorado, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/Fundacionalfa.webp"
        },
        {
            nombre: "Instituto Argentino de Estudios Superiores IAES",
            ubicacion: "Puerto Iguazú, Misiones",
            logo: "https://ss-static-001.esmsv.com/r/content/host2/40226b0c6439fc4e64782c93fb6bda85//editor/IAES.webp"
        }
    ];

    // CSS del widget
    const styles = `
        .attimo-clientes-widget {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        .attimo-clientes-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 30px;
            align-items: center;
        }

        .attimo-cliente-item {
            position: relative;
            aspect-ratio: 1;
            overflow: hidden;
            cursor: pointer;
            border-radius: 8px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }

        .attimo-cliente-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        .attimo-cliente-item img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            transition: opacity 0.3s ease;
        }

        .attimo-cliente-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(66, 153, 225, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            padding: 20px;
            text-align: center;
        }

        .attimo-cliente-item:hover .attimo-cliente-overlay {
            opacity: 1;
        }

        .attimo-cliente-nombre {
            color: white;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.4;
        }

        @media (max-width: 1024px) {
            .attimo-clientes-grid {
                grid-template-columns: repeat(4, 1fr);
                gap: 25px;
            }
        }

        @media (max-width: 768px) {
            .attimo-clientes-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }
        }

        @media (max-width: 480px) {
            .attimo-clientes-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            
            .attimo-cliente-nombre {
                font-size: 12px;
            }
        }
    `;

    // Función para inyectar CSS
    function injectStyles() {
        if (!document.getElementById('attimo-clientes-styles')) {
            const styleTag = document.createElement('style');
            styleTag.id = 'attimo-clientes-styles';
            styleTag.textContent = styles;
            document.head.appendChild(styleTag);
        }
    }

    // Función para crear el widget
    function createWidget(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Contenedor no encontrado:', containerId);
            return;
        }

        // Crear estructura del widget
        const widgetHTML = `
            <div class="attimo-clientes-widget">
                <div class="attimo-clientes-grid">
                    ${clientes.map(cliente => `
                        <div class="attimo-cliente-item">
                            <img src="${cliente.logo}" alt="${cliente.nombre}">
                            <div class="attimo-cliente-overlay">
                                <div class="attimo-cliente-nombre">
                                    ${cliente.nombre}<br>(${cliente.ubicacion})
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.innerHTML = widgetHTML;
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            injectStyles();
            createWidget('attimo-clientes-widget');
        });
    } else {
        injectStyles();
        createWidget('attimo-clientes-widget');
    }
})();