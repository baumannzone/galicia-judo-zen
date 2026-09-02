import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal — Club Deportivo Baixo Miño" },
      { name: "description", content: "Aviso Legal, Política de Privacidad y Política de Cookies del Club Deportivo Baixo Miño." },
      { property: "og:title", content: "Aviso Legal — Club Deportivo Baixo Miño" },
    ],
  }),
  component: Legal,
});

function Legal() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h1 className="font-display text-4xl font-semibold tracking-tight mb-12">Aviso Legal</h1>

        <h2 className="font-display text-2xl font-semibold tracking-tight mt-10 mb-4">1. Información General</h2>
        <p>
          Este sitio web es propiedad y está operado por el <strong>Club Deportivo Baixo Miño</strong>.
        </p>
        <ul>
          <li><strong>Razón Social:</strong> Club Deportivo Baixo Miño / Clube de Judo Baixo Miño</li>
          <li><strong>NIF:</strong> G94146552</li>
          <li><strong>Domicilio:</strong> Rúa Irmáns Noia Xil, 2, 36780 A Guarda, Pontevedra, España</li>
          <li><strong>Teléfono:</strong> +34 986 910 408 / +34 663 374 895</li>
          <li><strong>Email:</strong> judobaixominho@gmail.com</li>
          <li><strong>Número de Registro:</strong> C-12756 (Federación Galega de Judo)</li>
        </ul>

        <h2 className="font-display text-2xl font-semibold tracking-tight mt-10 mb-4">2. Uso del Sitio Web</h2>
        <p>
          El usuario acepta utilizar este sitio web de conformidad con la ley aplicable y de manera que no infrinja los derechos de terceros ni restrinja o inhiba su uso y disfrute. El comportamiento prohibido incluye: acosar o causar angustia o inconveniente; transmitir contenido obsceno u ofensivo; interrumpir el flujo normal del diálogo en un sitio web.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight mt-10 mb-4">3. Responsabilidad de Contenidos</h2>
        <p>
          El Club Deportivo Baixo Miño se esfuerza por asegurar que la información contenida en este sitio sea exacta y actual. Sin embargo, no garantiza la precisión, integridad o actualidad de la información. El acceso a este sitio web se proporciona "tal cual" sin garantías de ningún tipo.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight mt-10 mb-4">4. Política de Privacidad</h2>
        <p>
          <strong>Datos Personales Recopilados</strong>
        </p>
        <p>
          Cuando completa formularios de contacto, podemos recopilar información personal como nombre, email, teléfono y mensaje. Esta información se utiliza exclusivamente para responder a sus consultas.
        </p>
        <p>
          <strong>Protección de Datos</strong>
        </p>
        <p>
          Cumplimos con el Reglamento General de Protección de Datos (RGPD). Sus datos personales serán protegidos con medidas de seguridad apropiadas. No compartimos sus datos con terceros sin su consentimiento.
        </p>
        <p>
          <strong>Derechos del Usuario</strong>
        </p>
        <p>
          Tiene derecho a acceder, rectificar, suprimir u oponerseál tratamiento de sus datos personales. Para ejercer estos derechos, contacte a judobaixominho@gmail.com.
        </p>
        <p>
          <strong>Protección de Menores</strong>
        </p>
        <p>
          Especialmente en caso de formularios de inscripción a actividades, solicitamos consentimiento parental explícito para el tratamiento de datos de menores. Nunca compartiremos datos de menores sin autorización.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight mt-10 mb-4">5. Política de Cookies</h2>
        <p>
          Este sitio web utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos que se almacenan en su dispositivo.
        </p>
        <p>
          <strong>Tipos de Cookies</strong>
        </p>
        <ul>
          <li><strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
          <li><strong>Cookies de Analítica:</strong> Para entender cómo usa el sitio (p.ej. Google Analytics)</li>
          <li><strong>Cookies de Publicidad:</strong> Para mostrar contenido relevante</li>
        </ul>
        <p>
          Puede controlar o borrar las cookies a través de la configuración de su navegador. Tenga en cuenta que deshabilitar cookies puede afectar la funcionalidad del sitio.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight mt-10 mb-4">6. Enlaces Externos</h2>
        <p>
          Este sitio puede contener enlaces a sitios web externos. El Club Deportivo Baixo Miño no es responsable del contenido de estos sitios ni de sus políticas de privacidad.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight mt-10 mb-4">7. Limitación de Responsabilidad</h2>
        <p>
          En la máxima medida permitida por la ley, el Club Deportivo Baixo Miño no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente derivado del uso o incapacidad de usar este sitio.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight mt-10 mb-4">8. Cambios a Este Aviso Legal</h2>
        <p>
          El Club Deportivo Baixo Miño se reserva el derecho de modificar este aviso legal en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight mt-10 mb-4">9. Ley Aplicable</h2>
        <p>
          Este sitio web y estos términos se rigen por la ley española. Cualquier disputa será resuelta en los tribunales competentes de Pontevedra, España.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight mt-10 mb-4">10. Contacto</h2>
        <p>
          Para preguntas sobre este aviso legal, privacidad o cookies, contacte a:
        </p>
        <p>
          <strong>Club Deportivo Baixo Miño</strong><br/>
          Email: judobaixominho@gmail.com<br/>
          Teléfono: +34 986 910 408 / +34 663 374 895<br/>
          Dirección: Rúa Irmáns Noia Xil, 2, 36780 A Guarda, Pontevedra
        </p>

        <p className="mt-12 text-sm text-muted-foreground">
          Última actualización: Julio 2026
        </p>
      </div>
    </section>
  );
}
