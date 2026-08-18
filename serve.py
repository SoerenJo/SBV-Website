#!/usr/bin/env python3
"""Lokaler Testserver, der Cloudflare Pages' Clean-URL-Verhalten nachbildet
(z.B. /aktuelles -> aktuelles.html), damit Links lokal genauso funktionieren wie live."""
import http.server
import os


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        translated = super().translate_path(path)
        if not os.path.exists(translated) and os.path.exists(translated + ".html"):
            return translated + ".html"
        return translated


if __name__ == "__main__":
    http.server.test(HandlerClass=CleanURLHandler, port=4173)
