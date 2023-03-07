// pages/_document.js
import { env } from 'process';

import Document, { DocumentContext, Head, Html } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            (
              <body className="custom">
                <App {...props} />
              </body>
            ),
          //
          //       <Head />
          //       <body>
          //         <App {...props} />
          //         <Main />
          //         <NextScript />
          //       </body>
          //     </Html>,
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>,
      };
    } finally {
    }
  }
}
