<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 2rem; background: #f4f4f4; }
          h1 { color: #0F6E5C; }
          ul { list-style: none; padding: 0; }
          li { background: white; margin-bottom: 10px; padding: 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
          a { color: #B08D2E; font-weight: bold; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>RoboWild XML Sitemap</h1>
        <ul>
          <xsl:for-each select="s:urlset/s:url">
            <li>
              <a href="{s:loc}"><xsl:value-of select="s:loc"/></a>
              <span style="float:right; color:#666;">Priority: <xsl:value-of select="s:priority"/></span>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>