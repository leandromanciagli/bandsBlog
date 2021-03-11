<template>
    <v-card
        class="mx-auto my-12"
        max-width="374"
    >
        <v-img :src="album.cover"></v-img>
        <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
                <v-card-title>{{ album.artist }} -  {{ album.name }}</v-card-title>
                <v-rating
                    :value="5.0"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="grey--text ml-4">
                    5.0
                </div>
            </v-row>
        </v-card-text>

        <v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-title>{{ album.total_tracks }} Tracks</v-card-title>
            <v-card-text>
                <v-row v-for="track in album.tracks" :key="track.number">
                    {{ track.number }}. {{ track.name }}
                </v-row>
            </v-card-text>
        </v-card-text>
        
    </v-card>
</template>

<script>
    const axios = require('axios');
    export default {
        props: ["albumId"],
        data () {
            return {
                album: {
                    name: '',
                    artist: '',
                    total_tracks: 0,
                    tracks: [],
                    cover: '',
                },
            };
        },

        created: function () {
            this.getAlbum();
        },

        methods: {
            async getAlbum() {
                const options = {
                    method: "GET",
                    url: "https://api.spotify.com/v1/albums/" + this.albumId,
                    headers: {
                        "Authorization": "Bearer <token aqui>",
                    },
                };
                axios
                    .request(options)
                    .then((response) => {
                        console.log(response.data);
                        this.album.name = response.data.name;
                        this.album.artist = response.data.artists[0].name;
                        this.album.total_tracks = response.data.total_tracks;
                        response.data.tracks.items.forEach(item => {
                            this.album.tracks.push({number: item.track_number, name: item.name});
                        });
                        this.album.cover = response.data.images[0].url;
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            },
        },
        watch: {
            albumId: function(){
                this.album = {
                    name: '',
                    artist: '',
                    total_tracks: 0,
                    tracks: [],
                    cover: '',
                },
                this.getAlbum();
            }
        }
    }
</script>