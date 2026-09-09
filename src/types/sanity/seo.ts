export interface SeoOverride {
	title?: string;
	description?: string;
	image?: {
		asset: {
			_id: string;
			url: string;
			metadata?: {
				lqip?: string;
				dimensions?: { width: number; height: number };
			};
		};
	};
	noIndex?: boolean;
}
