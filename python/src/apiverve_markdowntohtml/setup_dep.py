from setuptools import setup, find_packages

setup(
    name='apiverve_markdowntohtml',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Markdown to HTML is a markdown converter API that parses markdown syntax and converts it to clean, semantic HTML suitable for web rendering and content management.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/markdowntohtml?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
