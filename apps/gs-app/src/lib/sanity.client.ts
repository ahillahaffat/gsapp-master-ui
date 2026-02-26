import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

type ImageSource = { asset?: { _ref: string }; hotspot?: unknown; crop?: unknown } | { _ref: string } | string | null | undefined;

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export const client = createClient({
    projectId,
    dataset,
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: ImageSource) {
    return builder.image(source as Parameters<typeof builder.image>[0]);
}
