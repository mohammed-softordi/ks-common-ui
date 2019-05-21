/**
 * Use `KsAnchorBehavior` to implement anchors with `<ks-nav-item>`.
 * It exposes a number of properties from `<ks-nav-item>` and
 * they should be bound in your template.
 *
 * @polymerBehavior KsAnchorBehavior
 */

export const KsAnchorBehavior = function (superClass) {
    return class extends superClass {
        constructor() {
            super();
        }
        static get properties() {
            return {
                title: { type: String, value: '' },
                class: {
                    type: String
                },
                id: { type: String},
                download: { type: String },
                href: { type: String },
                hreflang: { type: String },
                ping: { type: String },
                referrerpolicy : { type: String },
                rel: { type: String },
                target: { type: String },
                type: { type: String }
            };
        }
    }
};

/** @polymerBehavior */
