import { writable } from 'svelte/store';
import { supabase } from '../supabase.js';

export const listings = writable([]);

export const loadListings = async () => {
	const { data, error } = await supabase.from('listings').select();

	if (error) {
		return console.error(error);
	}
	listings.set(data);
};

export const addListing = async (address, city, state, zip_code, user_id) => {
	const { data, error } = await supabase
		.from('listings')
		.insert([{ address, city, state, zip_code, user_id }]);

	if (error) {
		return console.error(error);
	}
};

export const deleteListing = async (id) => {
	const { error } = await supabase.from('listings').delete().match({ id });

	if (error) {
		return console.error(error);
	}

	listings.update((listings) =>
		listings.filter((listing) => listing.id !== id)
	);
};
