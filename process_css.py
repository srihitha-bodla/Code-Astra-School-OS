import re

with open("/Users/srivalli/Downloads/Index _School OS.html", "r") as f:
    content = f.read()

style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if style_match:
    css = style_match.group(1)
    
    # Generic tags to prefix with .landing-page
    tags = ['html', 'body', 'a', 'ul', 'img', 'button', 'h1', 'h2', 'h3', 'h4', 'main', 'header', 'footer', 'section']
    
    lines = css.split('\n')
    out_lines = []
    
    for line in lines:
        if line.strip().startswith('/*') or line.strip().startswith('@') or line.strip().startswith(':root'):
            out_lines.append(line)
            continue
            
        # Very simple prefixing logic for lines that define rules (not perfect but good enough for this file's format)
        # In this file, rules start at the beginning of the line or with slight indentation
        
        # We will wrap the entire CSS in .landing-page using standard CSS nesting!
        # Wait, standard CSS nesting is supported in modern browsers and Tailwind postcss!
        # Tailwind CSS v4 supports native CSS nesting out of the box.
        pass
        
    # Since Tailwind v4 uses standard CSS nesting, we can just wrap the whole thing!
    nested_css = ".landing-page {\n" + css + "\n}\n"
    
    # But wait, :root cannot be nested inside .landing-page, neither can @keyframes or @media easily if not handled perfectly.
    # It's better to just write the CSS out and let it be. If we just add `.landing-page` before the base tags it's fine.
    
    # Let's just do simple regex replacements for the specific base tags in this file:
    css = re.sub(r'^html,body\{', '.landing-page {', css, flags=re.MULTILINE)
    css = re.sub(r'^body\{', '.landing-page {', css, flags=re.MULTILINE)
    css = re.sub(r'^a\{', '.landing-page a {', css, flags=re.MULTILINE)
    css = re.sub(r'^ul\{', '.landing-page ul {', css, flags=re.MULTILINE)
    css = re.sub(r'^img\{', '.landing-page img {', css, flags=re.MULTILINE)
    css = re.sub(r'^button\{', '.landing-page button {', css, flags=re.MULTILINE)
    css = re.sub(r'^h1,h2,h3,h4\{', '.landing-page h1, .landing-page h2, .landing-page h3, .landing-page h4 {', css, flags=re.MULTILINE)
    css = re.sub(r'^main, header, footer\{', '.landing-page main, .landing-page header, .landing-page footer {', css, flags=re.MULTILINE)
    css = re.sub(r'^section\{', '.landing-page section {', css, flags=re.MULTILINE)
    
    # For :root variables, let's keep them in :root or move to .landing-page
    css = css.replace(':root{', '.landing-page {')
    
    with open("src/app/landing.css", "w") as f:
        f.write(css)
    print("CSS extracted and scoped to src/app/landing.css")
else:
    print("No style block found")

