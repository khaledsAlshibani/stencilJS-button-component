import { newSpecPage } from '@stencil/core/testing';
import { KhButtonStencil } from '../kh-button';

describe('kh-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KhButtonStencil],
      html: `<kh-button></kh-button>`,
    });
    expect(page.root).toEqualHtml(`
      <kh-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kh-button>
    `);
  });
});
