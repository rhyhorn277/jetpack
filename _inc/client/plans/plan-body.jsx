/**
 * External dependencies
 */
import React from 'react';
import Button from 'components/button';
import { translate as __ } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import { imagePath } from 'constants';

const PlanBody = React.createClass( {
	render() {
		let planCard = '';
		switch ( this.props.plan ) {
			case 'jetpack_premium':
			case 'jetpack_premium_monthly':
			case 'jetpack_business':
			case 'jetpack_business_monthly':
				let needMore = '';
				if ( [ 'jetpack_premium', 'jetpack_premium_monthly' ].includes( this.props.plan ) ) {
					needMore = (
						<div className="jp-landing__plan-features-card">
							<h3 className="jp-landing__plan-features-title">{ __( 'Need more?' ) }</h3>
							<p>{ __( 'Jetpack Professional offers advanced features including:' ) }</p>
							<p> &mdash; { __( 'Supports 1-3 sites' ) }</p>
							<p> &mdash; { __( 'Includes on-demand malware scanning' ) }</p>
							<p> &mdash; { __( 'Unlimited backup archive' ) }</p>
							<p> &mdash; { __( 'Real-time backups' ) }</p>
							<p> &mdash; { __( 'One-click threat resolution' ) }</p>
							<p> &mdash; { __( 'Advanced polls and ratings' ) }</p>
							<p>
								<Button href={ 'https://wordpress.com/plans/' + window.Initial_State.rawUrl } className="is-primary">
									{ __( 'Compare Plans' ) }
								</Button>
							</p>
						</div>
					)
				}
				planCard = (
					<div className="jp-landing__plan-features">
						<div className="jp-landing__plan-features-card">
							<h3 className="jp-landing__plan-features-title">{ __( 'Spam Protection' ) }</h3>
							<p>{ __( 'State-of-the-art spam defense powered by Akismet.' ) }</p>
							<Button href={ window.Initial_State.adminUrl + 'admin.php?page=akismet-key-config' } className="is-primary">
								{ __( 'View your spam stats' ) }
							</Button>
						</div>

						<div className="jp-landing__plan-features-card">
							<h3 className="jp-landing__plan-features-title">{ __( 'Security Scanning & Backups' ) }</h3>
							<p>{ __( 'Realtime backup with unlimited space, one-click restores, bulletproof spam monitoring, malware defense, and brute-force login protection - all in one place.' ) }</p>
							<Button href="https://dashboard.vaultpress.com/" className="is-primary">
								{ __( 'View your security dashboard' ) }
							</Button>
						</div>
						{ needMore }
					</div>
				);
				break;

			case 'jetpack_free':
			case 'dev':
				planCard = (
					<div className="jp-landing__plan-features">
						<div className="jp-landing__plan-features-card">
							<h3 className="jp-landing__plan-features-title">{ __( 'Maximum grade security' ) }</h3>
							<p>{ __( 'Realtime backup with unlimited space, one-click restores, bulletproof spam monitoring, malware defense and brute-force login protection - all in one place and optimized for WordPress.' ) }</p>
						</div>
						<div className="jp-landing__plan-features-card">
							<h3 className="jp-landing__plan-features-title">{ __( 'Lock out the bad guys' ) }</h3>
							<p>{ __( 'Bulletproof spam filtering protects your brand, your readers, and improves SEO. Brute force login protection helps maintain peace of mind and keeps your backend safe from intruders.' ) }</p>
						</div>

						<div className="jp-landing__plan-features-card">
							<h3 className="jp-landing__plan-features-title">{ __( 'Enjoy priority support' ) }</h3>
							<p>{ __( 'Need help? A Happiness Engineer can answer questions about your site, your account or how to do about anything.' ) }</p>
						</div>
					</div>
				);
				break;

			default:
				planCard = (
					<div className="jp-landing__plan-features">
						<div className="jp-landing__plan-features-card">
							<h3 className="jp-landing__plan-features-title is-placeholder"> </h3>
							<p className="jp-landing__plan-features-text is-placeholder"> </p>
						</div>
						<div className="jp-landing__plan-features-card">
							<h3 className="jp-landing__plan-features-title is-placeholder"> </h3>
							<p className="jp-landing__plan-features-text is-placeholder"> </p>
						</div>

						<div className="jp-landing__plan-features-card">
							<h3 className="jp-landing__plan-features-title is-placeholder"> </h3>
							<p className="jp-landing__plan-features-text is-placeholder"> </p>
						</div>
					</div>
				);
				break;
		}
		return (
			<div>
				{ planCard	}
			</div>
		);
	}
} );

export default PlanBody;
