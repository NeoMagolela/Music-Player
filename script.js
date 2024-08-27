const now_playing = document.getElementsByClassName(now_playing);
const track_art = document.getElementsByClassName(track_art);
const track_name = document.getElementsByClassName(track_name);
const track_artist = document.getElementsByClassName(track_artist);

const playpause_btn = document.querySelector('.playpause-track');
const next_btn = document.querySelector('.next-track');
const prev_btn = document.querySelector('.prev-track');

const sleek_slider= document.querySelector('.sleek_slider');
const volume_slider = document.querySelector('.volume_slider');
const curr_time = document.querySelector('.current-time');
const total_duration = document.querySelector('.total-duration');
const wave = document.querySelector('.wave');
const randomIcon = document.querySelector('.fa-random');
const curr_track = document.querySelector('.audio');

const track_index = 0;
const isPlaying = false;
let updateTimer;

const music_list = [
    {
        img:'',
        name:'Stay',
        artist:'The Kid LAROI, Justin Bieber',
        
    }
]