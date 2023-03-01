export type Twitch = {
	access_token: string;
	expires_in: number;
	token_type: string;
};

export type User = {
	data: User_data[];
	pagination: Pagination;
};

export interface User_data {
	broadcaster_language: string;
	broadcaster_login: string;
	display_name: string;
	game_id: string;
	game_name: string;
	id: string;
	is_live: boolean;
	tag_ids: string[];
	tags: string[];
	thumbnail_url: string;
	title: string;
	started_at: string;
}

export interface Pagination {
	cursor: string;
}

export type Stream = {
	data: Stream_data[];
	pagination: Pagination;
};
export type Stream_data = {
	id: string;
	user_id: string;
	user_login: string;
	user_name: string;
	game_id: string;
	game_name: string;
	type: string;
	title: string;
	viewer_count: number;
	started_at: string;
	language: string;
	thumbnail_url: string;
	tag_ids: string[];
	tags: string[];
	is_mature: boolean;
};

export type Clips = {
	data: Clips_data[];
	pagination: Pagination;
}

export type Clips_data = {
	id: string;
	url: string;
	embed_url: string;
	broadcaster_id: string;
	broadcaster_name: string;
	creator_id: string;
	creator_name: string;
	video_id: string;
	game_id: string;
	language: string;
	title: string;
	view_count: number;
	created_at: Date;
	thumbnail_url: string;
	duration: number
	vod_offset: any

}
