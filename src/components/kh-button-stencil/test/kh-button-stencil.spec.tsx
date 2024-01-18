import { newSpecPage } from '@stencil/core/testing';
import { KhButtonStencil } from '../kh-button-stencil';

describe('kh-button-stencil', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KhButtonStencil],
      html: `<kh-button-stencil></kh-button-stencil>`,
    });
    expect(page.root).toEqualHtml(`
      <kh-button-stencil>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kh-button-stencil>
    `);
  });
});
