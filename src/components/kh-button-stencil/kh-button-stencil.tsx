import { Component, Host, Prop, h } from '@stencil/core';

@Component({
	tag: 'kh-button-stencil',
	styleUrl: 'kh-button-stencil.css',
	shadow: true,
})
export class KhButtonStencil {
	@Prop() text: string;
	@Prop() link: string;

	private handleClick = () => {
		if (this.link) {
			location.href = this.link;
		}
	}

	render() {
		return (
			<Host>
				<button class="button" onClick={this.handleClick}>{this.text}</button>
			</Host>
		);
	}

}
